import React from 'react';

const Book = props => {
  return (
    <div className="books">
      <h2>{props.title}</h2>
      <img src={props.author_image_url}/>
      <p></p>
      <p></p>
    </div>
  );
}








// import React, { Component } from 'react';
//
// class Book extends Component {
//   render() {
//     return(
//       <div className="Book">
//         <h2>{this.props.title}</h2>
//         <div className="author-image-and-name-wrapper">
//           <div className="image-wrapper">
//             <img src={this.props.author_image_url} />
//           </div>
//           <p>{this.props.author}</p>
//         </div>
//         <p>{this.props.description}</p>
//       </div>
//     );
//   }
// }
//
// export default Book;
