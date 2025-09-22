
type planeta = {
  id:number,
  title: string,
  carregando?: boolean;  
  erro?: string | boolean;  
  msg?: string | boolean;   
  children?: React.ReactNode;  

}

export default function Message(props:planeta){
    return(
    <div className="min-h-screen">

      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Logo</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Sobre</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Area */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conteúdo Principal
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">
              
                  <p>{props.id}</p>
                  <p>{props?.title}</p>
                  <p>{props.carregando}</p>
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Widget</h3>
              <p className="text-gray-600">Conteúdo do widget...</p>
            </div>
          </aside>
        </div>
      </main>
         
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p>&copy; 2024 Seu Site. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

</div>
        
      
    )
}