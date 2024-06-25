import Navigation from "../../components/navigation/navigation.component"

const PageNotFound = () => {
  document.title = "Page not found";
    return (
        <>
        <Navigation />
        <h1>Page not found</h1>
        </>
    )
}

export default PageNotFound;