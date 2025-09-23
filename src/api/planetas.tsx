
interface Planet {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

interface ApiResponse<T> {
    data?: T;
    error?: string;
    success: boolean;
}

export default class ApiPlanetas {
    private static baseUrl = 'https://jsonplaceholder.typicode.com';
    
    static async ObterTodos(): Promise<ApiResponse<Planet[]>> {
        try {
            const response = await this.obter({
                conditions: {}
            });
            return response;
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            };
        }
    }
    
    static async obter(params?: { conditions: Record<string, number> }): Promise<ApiResponse<Planet[]>> {
        const json = {
            conditions: params?.conditions || {}
        };
        
        const requestOptions: RequestInit = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(json),
            // Fixed: redirect should be "follow" not " follow"
            redirect: "follow"
        };
        
        try {
            // For demonstration - using todos endpoint since it's available
            const response = await fetch(`${this.baseUrl}/todos`, requestOptions);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const responseJson: Planet[] = await response.json();
            console.log('Success:', responseJson);
            
            return {
                success: true,
                data: responseJson
            };
            
        } catch (error) {
            console.error('API Error:', error);
            
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Network error occurred'
            };
        }
    }
    
    // Alternative GET method (since most APIs use GET for fetching data)
    static async obterComGet(): Promise<ApiResponse<Planet[]>> {
        try {
            const response = await fetch(`${this.baseUrl}/todos`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const responseJson: Planet[] = await response.json();
            
            return {
                success: true,
                data: responseJson
            };
            
        } catch (error) {
            console.error('API Error:', error);
            
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Network error occurred'
            };
        }
    }
}