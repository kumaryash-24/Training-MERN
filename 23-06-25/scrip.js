const person = {
    name:"yash",
    location: "delhi",
    id: 1001,
    fullDetail: function(){
        console.log(this.name,this.location,this.id)

    }
}
person.fullDetail()