let production = false;

class Config {

    static appName = 'Ecostance'
    static production = production
    static liveHost = ""
    
    static testHost =  "https://ec.apimachine.com"
   
    static baseUrl = production ? this.liveHost : this.testHost
    static AppVersion  = '1.0'
    
    static appHeaders = {
        Accept: "application/json", 
        "Content-type": "application/json",
        "app-version" : this.AppVersion
    }

}


export default Config