
import Message from "../message/page";

type planetas = {
    id:number,
    title: string,
    carregando?: boolean;  
    erro?: string | boolean;
    msg?: string | boolean ;  
    children?: React.ReactNode; 
    

}

export default function Padrao(props:planetas){

    return (
        <>
         {
            (props?. carregando === true) ? (<>
            <Message
            id={props.id} 
            title={props.title}
             />
             </>) : (<>
            {
                (props?.erro ) ? (<>

                <Message 
                
            id={1} 
            title="Erro"
            msg={typeof props.erro === 'string' ? props.erro : 'Erro ocorreu'}
            
             />

                </>):(<>
                {
                (props?.msg)? (<>
                <Message 
                
                
            id={props.id} 
            title={props.title}
            msg={typeof props.msg === 'string' ? props.msg: 'Erro ocorreu'}
            
             />
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