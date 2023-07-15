import { Company } from "./Company";
import { User } from "./User";
import { Mappable } from "./mappable";


//the idea is create an interface MAppable which acts as an argument
//that tells how to be an argument to the addMArker functionS

export class CustomMap{
    private googleMap: google.maps.Map;
    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement,{
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        });

    }
    addMarker(obj : Mappable):void{
        let marker=new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: obj.location.lat,
                lng: obj.location.lng

            }
        });
        const infoWindow = new google.maps.InfoWindow({
            content: obj.markerContent()
        });
        marker.addListener("click",()=>{
            infoWindow.open(this.googleMap,marker);
        })

    }


    //disadvantage with this idea is we should add a new obj type obj: User|CArlot something llike this if we need to add its mark too

    // addMarker(obj : User | Company):void{
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: obj.location.lat,
    //             lng: obj.location.lng

    //         }
    //     });
    // }

    //this is the bad Idea as this is a lot of repetition

    // addUserMarker(user: User): void{
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: user.location.lat,
    //             lng: user.location.lng

    //         }
    //     });
    // }
    // addCompanyMarker(company: Company): void{
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng

    //         }
    //     });
    // }
}