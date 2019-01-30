class Location {
    constructor(name, address="N/A", type="N/A", phone, email, connection){
        this.name = name;
        this.address = address;
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

var atlantaClients = [new Location("client1", "INSERT_ADDRESS_HERE", "client", "Atlanta"),
                      new Location("client1", "INSERT_ADDRESS_HERE", "client", "Atlanta"),
                      new Location("client3", "INSERT_ADDRESS_HERE", "client", "Atlanta"),
                      new Location("client4", "INSERT_ADDRESS_HERE", "client", "Atlanta"),
                      new Location("client5", "INSERT_ADDRESS_HERE", "client", "Atlanta")
                      ];

var chicagoClients = [ new Location("client6", "INSERT_ADDRESS_HERE", "client", "Atlanta"),
                       new Location("client7", "INSERT_ADDRESS_HERE", "client", "Atlanta"),
                       new Location("client8", "INSERT_ADDRESS_HERE", "client", "Atlanta"),
                       new Location("client9", "INSERT_ADDRESS_HERE", "client", "Atlanta"),
                       new Location("client10", "INSERT_ADDRESS_HERE", "client", "Atlanta")
                      ];

var offices = [new Location("Atlanta", "​​​​​​10 Tenth Street NE #375, Atlanta, GA 30309​", "office", "(404) 528-1120​", "atlanta@parivedasolutions.com", atlantaClients),
               new Location("Chicago", "​​​​​​​​​​​20 N. Wacker Dr.​ #2620, Chicago, IL 60606", "office", "(312) 902-5700", "chicago@parivedasolutions.com", chicagoClients),
               new Location("Dallas", "2811 McKin​ney Ave​ #220, LB 126, Dallas, TX  75204​​", "office", atlantaClients),
               new Location("Houston", "​​​​​​​​​​​​24 E. Greenway Plaza​ #1717, Houston, TX 77046", "office", atlantaClients),
               new Location("Los Angeles", "222 N. Sepulveda Blvd. #2120, El Segundo, CA 90245", "office", atlantaClients),
               new Location("New York", "​​​​​​​​​​​​​​​​​​​​​​150 East 52nd Street​ #8002, New York, NY 10022", "office", atlantaClients),
               new Location("Philadelphia", "1601 Market St 19th Floor, Philadelphia, PA 19103", "office", atlantaClients),
               new Location("San Francisco", "​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​201 California St #1250, San Francisco, CA 94111", "office", atlantaClients),
               new Location("Seattle", "1100 Olive Way #850, Seattle, WA 98101", "office", atlantaClients),
               new Location("Washington D.C.", "​​​​​​​​​​​​​​​​​1616 N Fort Myer Dr​ #1110, Arlington, V​​A 22209​", "office", atlantaClients)
           ];

var fins = [new Fin("Juan Vasquez", "Dallas", "N/A"),
            new Fin("Jake Altabef", "New York", "N/A")];


var content = offices.concat(atlantaClients.concat(chicagoClients));
