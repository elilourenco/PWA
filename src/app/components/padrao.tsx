
type planetas = {
    id:number,
    title: string,
    carregando?: boolean;  
    erro?: string | boolean;  
    msg?: string | boolean;   
    children?: React.ReactNode;  

}


export default function layout(props:planetas){
    return (
        <>
         {
            (props?. carregando === true) ? (<> </>) : (<>
            {
                (props?.erro ) ? (<>

                </>):(<>
                {
                (props?.msg)? (<>
                </>) : (<>

                {props.children}
                </>)
                 }

                </>)
            }
            </>)
         }

         
        </>
     )
}