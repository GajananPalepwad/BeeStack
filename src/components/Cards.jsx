import "./Cards.css";

import HomePage from "../pages/HomePage";


// const Card = ({ photo, name, description }) => {

//   return (

//     <div className="card">
//       <img src={photo
//       } alt={name} className="card-photo" />
//       <div className="card-details">
//         <h3>{name}</h3>
//         <p>{description}</p>
//       </div>
//     </div>

//   );
// };

// export default Card;

const Card = ({ photo, name, description, hoverColor }) => {
  return (
    <div className="card" style={{ "--hover-color": hoverColor }}>
      <img src={photo} alt={name} className="card-photo" />
      <div className="card-details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
