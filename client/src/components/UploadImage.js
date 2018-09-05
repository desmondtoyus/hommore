import React from 'react';
import API from "../utils/API";
class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    // handlePic = (e) => {
    //     e.preventDefault();
    //     API.savePic('pic')
    //         .then(res => console.log('Success'))
    //         .catch(err => console.log(err));
    // }

    _handleSubmit(e) {
        e.preventDefault();
        API.savePic('pic')
            .then(res => console.log('Success'))
            .catch(err => console.log(err));
        // TODO: do something with -> this.state.file
        console.log(this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        // console.log(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        }

        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <input type="file" onChange={this._handleImageChange} name='sampleFile'/>
                    <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                </form>
                {$imagePreview}
            </div>
        )
    }

}

export default UploadImage;