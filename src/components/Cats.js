import PhotoContainer from './PhotoContainer';

const Cats = ({ title, pics }) => {
    return (
        <>
            <PhotoContainer
                title={title}
                pics={pics}
            />
        </>
    )
}

export default Cats;
