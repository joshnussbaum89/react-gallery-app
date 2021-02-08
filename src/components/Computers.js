import PhotoContainer from './PhotoContainer';

const Computers = ({ title, pics }) => {
    return (
        <>
            <PhotoContainer
                title={title}
                pics={pics}
            />
        </>
    )
}

export default Computers;