import Loader from "../components/loader/loader";

const withLoader = (Wrapper) => {
   return (props) => {
       if (props.isFetching) return <Loader />;
       return <Wrapper { ... props } />;
   }
}

export default withLoader;