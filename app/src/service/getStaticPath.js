export default function getStaticPath(path) {
    return (process.env.REACT_APP_STATIC_PATH ?? "") + path;
}