package main

import (
    "net/http"
)

func main(){
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("ABCD"))
        return 
    })

    println("Listening on http://127.0.0.1:5000")
    http.ListenAndServe(":5000", nil)
}
