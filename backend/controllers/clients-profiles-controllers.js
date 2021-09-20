
import { validationResult } from 'express-validator';

export const createClientProfile = async (req, res) => {
    const { user_id, profile_pic, location} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else if (req.decoded.user_id === user_id) {

      try{

        const user = await client.query("SELECT * FROM clients_profiles WHERE user_id = $1", [
          user_id
        ]);
    
        if (user.rows.length > 0) {
          return res.status(401).json("client already exists!");
        }
        else{
          const newClient =  await client.query('INSERT INTO clients_profiles (user_id, profile_pic, location) VALUES ($1, $2, $3) RETURNING *', [user_id,  profile_pic, location])
          if(newClient){
           res.send({
             success: true,
             msg: 'profile created successfully!',
             client_id: newClient.rows[0].client_id
           });
          
          }
          else{
           res.status(401).send({ msg: 'Sorry you can not create a profile for another User!' });
          }

        }

      }

    catch(err){
      console.log(err)
    }
  }

  };



  export const updateClientProfile = async (req, res) => {
    const { id } = req.params;
    const { user_id, profile_pic, location} = req.body;
  
  if (req.decoded.user_id === user_id) {

      try{

        const updateProfile = await client.query(
          "UPDATE clients_profiles SET  profile_pic = $1, location = $2 WHERE client_id = $3 AND user_id = $4 RETURNING *",
          [ profile_pic, location, id, user_id ]
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

  export const getClient = async (req, res) => {
    const user_id = req.params.user_id
        try{ 
  
          const profiles = await client.query("SELECT * FROM clients_profiles WHERE user_id = $1", [user_id])
          if(profiles.rows.profiles){
            res.status(200).send({msg: "success", profiles: profiles.rows})
          }else{
            res.status(404).send({msg: "not found", profiles: profiles.rows})
          }
        
        }catch(err) {
          console.log(err)
        }
  }
  
  














