import PhotoContainer from './PhotoContainer';

const Dogs = ({ title, pics }) => {
    return (
        <>
            <PhotoContainer
                title={title}
                pics={pics}
            />
        </>
    )
}

export default Dogs;