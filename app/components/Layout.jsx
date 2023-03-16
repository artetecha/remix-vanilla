export default function Layout( { children } ) {
    return (
        <div style={ { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" } }>
            <div className="row">
                { children }
            </div>
        </div>
    );
}