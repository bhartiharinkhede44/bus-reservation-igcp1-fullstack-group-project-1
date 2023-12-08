import './Faqc'
const FaqC = ({que,ans }) => {
    return (
        <>
        <div>
            <div className=" container faq-container shadow-sm rounded ">
                <div className='card-faq'>
                <details>
                    <summary> {que}</summary>
                    <p>

                        {ans}
                    </p>

                </details>
                </div>
                
            </div>
            </div>
        </>

    )
}
export default FaqC