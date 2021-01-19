export default function Slice({data}) {

    var infos = data[0].body;

    return (
        <div>
            {infos.map((item, index) => (
                <div key={index}>
                    {item.slice_type == "hero" && (
                        <p>test</p>
                    )}
                </div>
            ))}
            Welcome to Slice
        </div>
    )
}