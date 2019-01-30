class Location {
    constructor(name, address="N/A", latLng={lat: 0.0, lng: 0.0}, type="N/A", phone, email, connection){
        this.name = name;
        this.address = address;
        this.latLng = latLng;
        this.type = type;
        this.phone = phone;
        this.email = email;

        if(this.type == "office"){
            this.client = connection;
        } else {
            this.market = connection;
        }
    }
}

class Fin {
    constructor(name, office, client) {
        this.name = name;
        this.office = office;
        this.client = client;
    }
}

var atlantaClients = [new Location("client1", "INSERT_ADDRESS_HERE", {lat: 0.0, lng: 0.0}, "client", "Atlanta"),
                      new Location("client1", "INSERT_ADDRESS_HERE", {lat: 0.0, lng: 0.0}, "client", "Atlanta"),
                      new Location("client3", "INSERT_ADDRESS_HERE", {lat: 0.0, lng: 0.0}, "client", "Atlanta"),
                      new Location("client4", "INSERT_ADDRESS_HERE", {lat: 0.0, lng: 0.0}, "client", "Atlanta"),
                      new Location("client5", "INSERT_ADDRESS_HERE", {lat: 0.0, lng: 0.0}, "client", "Atlanta")
                      ];

var chicagoClients = [ new Location("client6", "INSERT_ADDRESS_HERE", {lat: 0.0, lng: 0.0}, "client", "Atlanta"),
                       new Location("client7", "INSERT_ADDRESS_HERE", {lat: 0.0, lng: 0.0}, "client", "Atlanta"),
                       new Location("client8", "INSERT_ADDRESS_HERE", {lat: 0.0, lng: 0.0}, "client", "Atlanta"),
                       new Location("client9", "INSERT_ADDRESS_HERE", {lat: 0.0, lng: 0.0}, "client", "Atlanta"),
                       new Location("client10", "INSERT_ADDRESS_HERE", {lat: 0.0, lng: 0.0}, "client", "Atlanta")
                      ];

var dallasClients = [ new Location("Topgolf", "8750 N Central Expy #1200, Dallas, TX 75231", {lat: 32.87003, lng: -96.76966}, "client", "Dallas"),
                      new Location("Toyota USA", "6565 Headquarters Dr, Plano, TX 75024", {lat: 33.084463, lng: -96.840452}, "client", "Dallas"),
                      new Location("Southwest Airlines", "2702 Love Field Dr, Dallas, TX 75235", {lat: 32.845938, lng: -96.849378}, "client", "Dallas"),
                      new Location("HealthMarkets", "9151 Boulevard 26, North Richland Hills, TX 76180", {lat: 32.856896, lng: -97.189303}, "client", "Dallas"),
                      new Location("Oncor Energy", "1616 Woodall Rodgers Fwy, Dallas, TX 75202", {lat: 32.786677, lng: -96.803409}, "client", "Dallas")
                      ];

var offices = [new Location("Atlanta", "​​​​​​10 Tenth Street NE #375, Atlanta, GA 30309​", {lat: -1.0, lng: -1.0}, "office", "(404) 528-1120​", "atlanta@parivedasolutions.com", atlantaClients),
               new Location("Chicago", "​​​​​​​​​​​20 N. Wacker Dr.​ #2620, Chicago, IL 60606", {lat: -1.0, lng: -1.0}, "office", "(312) 902-5700", "chicago@parivedasolutions.com", chicagoClients),
               new Location("Dallas", "2811 McKin​ney Ave​ #220, LB 126, Dallas, TX  75204​​", {lat: -1.0, lng: -1.0}, "office", atlantaClients),
               new Location("Houston", "​​​​​​​​​​​​24 E. Greenway Plaza​ #1717, Houston, TX 77046", {lat: -1.0, lng: -1.0}, "office", atlantaClients),
               new Location("Los Angeles", "222 N. Sepulveda Blvd. #2120, El Segundo, CA 90245", {lat: -1.0, lng: -1.0}, "office", atlantaClients),
               new Location("New York", "​​​​​​​​​​​​​​​​​​​​​​150 East 52nd Street​ #8002, New York, NY 10022", {lat: -1.0, lng: -1.0}, "office", atlantaClients),
               new Location("Philadelphia", "1601 Market St 19th Floor, Philadelphia, PA 19103", {lat: -1.0, lng: -1.0}, "office", atlantaClients),
               new Location("San Francisco", "​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​201 California St #1250, San Francisco, CA 94111", {lat: -1.0, lng: -1.0}, "office", atlantaClients),
               new Location("Seattle", "1100 Olive Way #850, Seattle, WA 98101", {lat: -1.0, lng: -1.0}, "office", atlantaClients),
               new Location("Washington D.C.", "​​​​​​​​​​​​​​​​​1616 N Fort Myer Dr​ #1110, Arlington, V​​A 22209​", {lat: -1.0, lng: -1.0}, "office", atlantaClients)
           ];

var fins = [new Fin("Juan Vasquez", "Dallas", "N/A"),
            new Fin("Jake Altabef", "New York", "N/A")];


var content = offices.concat(atlantaClients.concat(chicagoClients.concat(dallasClients)));
