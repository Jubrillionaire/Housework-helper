import { validationResult } from "express-validator";

export const createWorkerProfile = async (req, res) => {
  const { user_id,  profile_pic, services, about, location, rate } =
    req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else if (req.decoded.user_id === user_id) {
    try {
      const user = await client.query(
        "SELECT * FROM workers_profiles WHERE user_id = $1",
        [user_id]
      );

      if (user.rows.length > 0) {
        return res.status(401).json("worker already exists!");
      } else {
        const newWorker = await client.query(
          "INSERT INTO workers_profiles ( user_id, profile_pic, services, about, location, rate) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
          [user_id, profile_pic, services, about, location, rate]
        );
        if (newWorker) {
          res.send({
            success: true,
            msg: "profile created successfully!",
            worker_id: newWorker.rows[0].worker_id,
          });
        } else {
          res
            .status(401)
            .send({
              msg: "Sorry you can not create a profile for another User!",
            });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
};



export const updateWorkerProfile = async (req, res) => {
    const { id } = req.params;
    const { user_id, profile_pic, services, about, location, rate} = req.body;

  if (req.decoded.user_id === user_id) {

      try{
        const updateProfile = await client.query(
          "UPDATE workers_profiles SET profile_pic = $1, services = $2, about = $3, location = $4, rate = $5 WHERE worker_id = $6 AND user_id = $7 RETURNING *",
          [profile_pic, services, about, location, rate, id, user_id]
        );

      if(updateProfile.rows.length === 0){
        res.send({
          msg: "you can not update profile for another User!"
        })
      }
      else{
        res.send({
          msg: "profile updated successfully!!"
        })
      }
              
      }
  

    catch(err){
      res.send(err)
    }
  }

  else{
    res.send("you can't update another user's profile")
  }
    

  }
  
export const getWorker = async (req, res) => {
  const user_id = req.params.user_id
      try{ 

        const profiles = await client.query("SELECT * FROM workers_profiles WHERE user_id = $1", [user_id])
        if(profiles.rows[0]){
          res.status(200).send({msg: "success", profile: profiles.rows[0]})
        }else{
          res.status(404).send({msg: "profile not found"})
        }
      
      }catch(err) {
        console.log(err)
      }
}

