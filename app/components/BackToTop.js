"use client"
const BackToTop = () => {
    return (
        <>
            <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
                Back to top
            </button>
        </>
    )
};

export default BackToTop
