import PacmanLoader from "react-spinners/PacmanLoader";
import { LoaderWrapper } from "./TaskLoader.styled";

export const PacmanLoaderSpinner = () => {
    return (
        <LoaderWrapper>
              <PacmanLoader
        color='#F99943'
        loading={true}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </LoaderWrapper>
       
    )
}