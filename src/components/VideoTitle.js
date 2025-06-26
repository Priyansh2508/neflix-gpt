const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-72 px-12 absolute text-white bg-gradient-to-r from-black h-screen" >
           <h1 className="text-5xl font-bold text-white">
            {title}
           </h1>
           <p className="py-6 w-1/2">
            {overview}
           </p>
           <div>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-opacity-80"> ▶ Play</button>
            <button className="mx-2 bg-gray-800 text-white px-4 py-2 rounded bg-opacity-60 h-11 hover:bg-opacity-90"> ℹ️ More Info</button>
           </div>
        </div>
    );
}
export default VideoTitle;