class Location {
    constructor(name, address="N/A", latLng={lat: 0.0, lng: 0.0}, type="N/A", connection, phone="", email="", finlist=[]){
        this.name = name;
        this.address = address;
        this.latLng = latLng;
        this.type = type;
        this.phone = phone;
        this.email = email;
        this.finlist = finlist;

        if(this.type == "office"){
            this.client = connection;
        } else {
            this.market = connection;
        }
    }
}

class Fin {
    constructor(name, office, cohort) {
        this.name = name;
        this.office = office;
        this.cohort = cohort;
    }
}

var atlantaClients = [new Location("Autotrader", "3003 Summit Blvd NE #200, Atlanta, GA 30319", {lat: 33.914036, lng: -84.342766}, "client", "Atlanta"),
                      new Location("Axioma", "400 Northridge Rd #550, Sandy Springs, GA 30350", {lat: 33.983209, lng: -84.346536}, "client", "Atlanta"),
                      new Location("Brightwell Payments", "4401 Northside Pkwy NW # 560, Atlanta, GA 30327", {lat: 33.867729, lng: -84.450045}, "client", "Atlanta"),
                      new Location("CHEP", "5885 Fulton Industrial Blvd SW, Atlanta, GA 30336", {lat: 33.72835, lng: -84.583444}, "client", "Atlanta"),
                      new Location("COX Automotive", "6205 Peachtree Dunwoody Rd, Atlanta, GA 30328", {lat: 33.927436, lng: -84.350779}, "client", "Atlanta")
                      ];

var chicagoClients = [ new Location("3WON", "535 E Diehl Rd #111, Naperville, IL 60563", {lat: 41.80297, lng: -88.14084}, "client", "Chicago"),
                       new Location("ALDI Inc.", "1200 N Kirk Rd, Batavia, IL 60510", {lat: 41.862187, lng: -88.274476}, "client", "Chicago"),
                       new Location("Adovcate Good Samaritan Hospital", "3815 Highland Ave, Downers Grove, IL 60515", {lat: 41.818558, lng: -88.008141}, "client", "Chicago"),
                       new Location("Aircell", "1250 N Arlington Heights Rd, Itasca, IL 60143", {lat: 41.98896, lng: -88.00331}, "client", "Chicago"),
                       new Location("AJ Antunes & Co", "180 Kehoe Blvd, Carol Stream, IL 60188", {lat: 41.908423, lng: -88.116881}, "client", "Chicago")
                      ];


var dallasClients = [ new Location("Topgolf", "8750 N Central Expy #1200, Dallas, TX 75231", {lat: 32.87003, lng: -96.76966}, "client", "Dallas"),
                      new Location("Toyota USA", "6565 Headquarters Dr, Plano, TX 75024", {lat: 33.084463, lng: -96.840452}, "client", "Dallas"),
                      new Location("Southwest Airlines", "2702 Love Field Dr, Dallas, TX 75235", {lat: 32.845938, lng: -96.849378}, "client", "Dallas"),
                      new Location("HealthMarkets", "9151 Boulevard 26, North Richland Hills, TX 76180", {lat: 32.856896, lng: -97.189303}, "client", "Dallas"),
                      new Location("Oncor Energy", "1616 Woodall Rodgers Fwy, Dallas, TX 75202", {lat: 32.786677, lng: -96.803409}, "client", "Dallas")
                     ];

var houstonClients = [ new Location("ABS", "1701 City Plaza Drive, Spring, TX 77389", {lat: 30.11054, lng: -95.49257}, "client", "Houston"),
                       new Location("Advanced Systems Group", "7906 North Sam Houston Pkwy W #202, Houston, TX 77064", {lat: 29.931521, lng: -95.542725}, "client", "Houston"),
                       new Location("48Fourty Solutions", "13100 Northwest Fwy # 450, Houston, TX 77040", {lat: 29.847484, lng: -95.500224}, "client", "Houston"),
                       new Location("Axon Energy", "10343 Sam Houston Park Dr #210, Houston, TX 77064", {lat: 29.914728, lng: -95.553806}, "client", "Houston"),
                       new Location("Baker Hueghs Petrolite", "1902 Cypress Station Dr, Houston, TX 77090", {lat: 30.012398, lng: -95.433081}, "client", "Houston")
                      ];

var losangelesClients = [ new Location("Advantage Sales & Marketing", "200 N Sepulveda Blvd, El Segundo, CA 90245", {lat: 33.91959, lng: -118.40082}, "client", "Los Angeles"),
                       new Location("Intuit", "21650 W Oxnard St Suite #2200, Woodland Hills, CA 91367", {lat: 34.17901, lng: -118.60107}, "client", "Los Angeles"),
                       new Location("Sony", "6080 Center Dr, Los Angeles, CA 90045", {lat: 33.97713, lng: -118.39172}, "client", "Los Angeles"),
                       new Location("Toyota", "19001 S Western Ave, Torrance, CA 90501", {lat: 33.856734, lng: -118.31082}, "client", "Los Angeles"),
                       new Location("STX Entertainment", "3900 W Alameda Ave, Burbank, CA 91505", {lat: 34.157377, lng: -118.334}, "client", "Los Angeles")
                      ];

var newyorkClients = [ new Location("Axioma", "17 State St, New York, NY 10004", {lat: 40.70289, lng: -74.01387}, "client", "New York"),
                       new Location("Guardian Life ", "7 Hanover Square, New York, NY 10004", {lat: 40.704265, lng: -74.009335}, "client", "New York"),
                       new Location("Direct Energy Companies", "150 E 52nd St #1501, New York, NY 10022", {lat: 40.757319, lng: -73.970686}, "client", "New York"),
                       new Location("Ralph Lauren", "625 Madison Ave, New York, NY 10022", {lat: 40.76321, lng: -73.971501}, "client", "New York"),
                       new Location("Venmo", "117 Barrow St, New York, NY 10014", {lat: 40.731747, lng: -74.008506}, "client", "New York")
                      ];

var philadelphiaClients = [ new Location("AmerisoursBergen Specialty Group", "31 Phoenix Dr, Thorofare, NJ 08086", {lat: 39.844, lng: -75.19402}, "client", "Philadelphia")
                      ];

var sanfranciscoClients = [ new Location("3Degrees", "4, 407 Sansome St, San Francisco, CA 94111", {lat: 37.794119, lng: -122.40169}, "client", "San Francisco"),
                       new Location("CH2M Hill Companies Ltd.", "150 Spear St #750, San Francisco, CA 94105", {lat: 37.791753, lng: -122.39361}, "client", "San Francisco"),
                       new Location("Chevron Corporation", "841 Chevron Way, Richmond, CA 94801", {lat: 37.932134, lng: -122.3911}, "client", "San Francisco"),
                       new Location("Delta Dental", "560 Mission St #1300, San Francisco, CA 94105", {lat: 37.78894, lng: -122.39875}, "client", "San Francisco"),
                       new Location("eBay", "199 Fremont St, San Francisco, CA 94105", {lat: 37.789884, lng: -122.39489}, "client", "San Francisco")
                      ];

var seattleClients = [ new Location("Amazon.com Inc.", "410 Terry Ave N, Seattle, WA 98109", {lat: 47.622318, lng: -122.33664}, "client", "Seattle"),
                       new Location("A Place for Mom", "701 5th Ave suite 3200, Seattle, WA 98104", {lat: 47.60435, lng: -122.32991}, "client", "Seattle"),
                       new Location("Colliers International", "601 Union St Suite 3320, Seattle, WA 98101", {lat: 47.61046, lng: -122.33215}, "client", "Seattle"),
                       new Location("Expedia.com", "645 Elliott Ave W #200, Seattle, WA 98119", {lat: 47.626122, lng: -122.36849}, "client", "Seattle"),
                       new Location("Fatigue Technology Inc", "401 Andover Park E, Tukwila, WA 98188", {lat: 47.452763, lng: -122.25164}, "client", "Seattle")
                      ];

var washingtondcClients = [];

var atlantaFins = [new Fin("Alex Lyons", "Atlanta","C2"),
            new Fin("Alex Parker", "Atlanta", "P2"),
            new Fin("Alex Rogers", "Atlanta", "C1"),
            new Fin("Antony Lauders", "Atlanta", "A1"),
            new Fin("Brad Twining", "Atlanta", "M2")];

var chicagoFins = [new Fin("Adrian Kosciak", "Chicago","M3"),
            new Fin("Al Ilseman", "Chicago","C2"),
            new Fin("Andy Hoch", "Chicago", "A2"),
            new Fin("Andy Sindoni", "Chicago", "M2"),
            new Fin("Anthony Daegele", "Chicago", "C1")];

var dallasFins = [new Fin("Juan Vasquez", "Dallas", "C1"),
            new Fin("Aaron Boswell", "Dallas", "V7"),
            new Fin("Allen Nguyen", "Dallas", "M2"),
            new Fin("Allison Grindle", "Dallas", "M1"),
            new Fin("Allison Moy", "Dallas", "A1")];

var houstonFins = [new Fin("Alan Henson", "Houston", "P3"),
            new Fin("Alex Benavides", "Houston", "C2"),
            new Fin("Alex Mong", "Houston", "A2"),
            new Fin("Alex Tai", "Houston", "P2"),
            new Fin("Allison Esenkova", "Houston", "V4")];

var losangelesFins = [new Fin("Anu Duggirala", "Los Angeles", "M3"),
            new Fin("Albert Cassanova", "Los Angeles", "M1"),
            new Fin("Avi Suntosh", "Los Angeles", "A1"),
            new Fin("Barclay Walsh", "Los Angeles", "A1"),
            new Fin("Benjamin You", "Los Angeles", "C2")];

var newyorkFins = [new Fin("Aaron Jordan", "New York", "A1"),
            new Fin("Aaron Reynolds", "New York", "A2"),
            new Fin("Ansley Galjour", "New York", "P2"),
            new Fin("Ben Reyes", "New York", "P3"),
            new Fin("Ben West", "New York", "A1")];

var philadelphiaFins = [new Fin("Amy Young", "Philadelphia", "P1"),
            new Fin("Cesar Giralt", "Philadelphia", "P1"),
            new Fin("Chris Martin", "Philadelphia", "A1"),
            new Fin("Chris Payne", "Philadelphia", "C2"),
            new Fin("Drew Zucker", "Philadelphia", "A1")];

var sanfranciscoFins = [new Fin("Adrian Meza", "San Francisco", "A1"),
            new Fin("Alex Deany", "San Francisco", "C1"),
            new Fin("Alex Miller", "San Francisco", "A1"),
            new Fin("Alexandria Johnson", "San Francisco", "M1"),
            new Fin("Allison Mar", "San Francisco", "C2")];

var seattleFins = [new Fin("Akhil Patel", "Seattle", "P3"),
            new Fin("Alan Hsu", "Seattle", "M3"),
            new Fin("Alec Branch", "Seattle", "A1"),
            new Fin("Alex Hong", "Seattle", "C2"),
            new Fin("Andru Freeman", "Seattle", "M1")];

var washingtondcFins = [new Fin("Aaron Fisher", "Washington D.C.", "M3"),
            new Fin("Anthony Perozze", "Washington D.C.", "A1"),
            new Fin("Brett Fox", "Washington D.C.", "A1"),
            new Fin("Charlotte Doney", "Washington D.C.", "C1"),
            new Fin("Cody Collins", "Washington D.C.", "C2")];

//constructor(name, address="N/A", latLng={lat: 0.0, lng: 0.0}, type="N/A", connection, phone="", email="", finlist=[])
var offices = [new Location("Atlanta", "​​​​​​10 Tenth Street NE #375, Atlanta, GA 30309​", {lat: -1.0, lng: -1.0}, "office", atlantaClients, "(404) 528-1120​", "atlanta@parivedasolutions.com", atlantaFins),
               new Location("Chicago", "​​​​​​​​​​​20 N. Wacker Dr.​ #2620, Chicago, IL 60606", {lat: -1.0, lng: -1.0}, "office", chicagoClients, "(312) 902-5700", "chicago@parivedasolutions.com", chicagoFins),
               new Location("Dallas", "2811 McKin​ney Ave​ #220, LB 126, Dallas, TX  75204​​", {lat: -1.0, lng: -1.0}, "office", dallasClients, "", "", dallasFins),
               new Location("Houston", "​​​​​​​​​​​​24 E. Greenway Plaza​ #1717, Houston, TX 77046", {lat: -1.0, lng: -1.0}, "office", houstonClients, "", "", houstonFins),
               new Location("Los Angeles", "222 N. Sepulveda Blvd. #2120, El Segundo, CA 90245", {lat: -1.0, lng: -1.0}, "office", losangelesClients, "", "", losangelesFins),
               new Location("New York", "​​​​​​​​​​​​​​​​​​​​​​150 East 52nd Street​ #8002, New York, NY 10022", {lat: -1.0, lng: -1.0}, "office", newyorkClients, "", "", newyorkFins),
               new Location("Philadelphia", "1601 Market St 19th Floor, Philadelphia, PA 19103", {lat: -1.0, lng: -1.0}, "office", philadelphiaClients, "", "", philadelphiaFins),
               new Location("San Francisco", "​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​201 California St #1250, San Francisco, CA 94111", {lat: -1.0, lng: -1.0}, "office", sanfranciscoClients, "", "", sanfranciscoFins),
               new Location("Seattle", "1100 Olive Way #850, Seattle, WA 98101", {lat: -1.0, lng: -1.0}, "office", seattleClients, "", "", seattleFins),
               new Location("Washington D.C.", "​​​​​​​​​​​​​​​​​1616 N Fort Myer Dr​ #1110, Arlington, V​​A 22209​", {lat: -1.0, lng: -1.0}, "office", washingtondcClients, "", "", washingtondcFins)
           ];

var content = [];
content = content.concat(offices);
content = content.concat(atlantaClients);
content = content.concat(chicagoClients);
content = content.concat(dallasClients);
content = content.concat(houstonClients);
content = content.concat(losangelesClients);
content = content.concat(newyorkClients);
content = content.concat(philadelphiaClients);
content = content.concat(sanfranciscoClients);
content = content.concat(seattleClients);
content = content.concat(washingtondcClients);
