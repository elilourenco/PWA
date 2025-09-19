


export default function layout(props){
     return (
        <>
         {
            (props?. carregando === true) ? (<> </>) : (<></>)
         }
        </>
     )
}