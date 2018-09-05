// import React, {Component} from 'react';
// var $ = require('jQuery');

// class ImageUpload extends Component {
//  constructor(props){
//      super(props);
//      this.state={

//      }
//  }
// //  componentDidMount(){

// // }
// render(){
//     showRequest = (formData, jqForm, options) => {
//         alert('Uploading is starting.');
//         return true;
//     }
   
//     // bind to the form's submit event
//     $('#frmUploader').submit(function () {
//         $(this).ajaxSubmit(options);
//         // always return false to prevent standard browser submit and page navigation
//         return false;
//     });
//     // post-submit callback
//     showResponse = (responseText, statusText, xhr, $form) => {
//         alert('status: ' + statusText + '\n\nresponseText: \n' + responseText );
//     }
//     let  options = {
//         beforeSubmit: this.showRequest,  // pre-submit callback
//         success: this.showResponse  // post-submit callback
//     };
//     $('#frmUploader').submit(function () {
//         $(this).ajaxSubmit(options);
//         // always return false to prevent standard browser submit and page navigation
//         return false;
//     });
//     return(

    
//             <div>
//             <form id="frmUploader" enctype="multipart/form-data" action="api/Upload/" method="post">
//             <input type="file" name="imgUploader" multiple />
//             <input type="submit" name="submit" id="btnSubmit" value="Upload" />
//         </form>
//         </div>
    
//     )
// }


  
    
//     // pre-submit callback

    
// }

// export default ImageUpload;
