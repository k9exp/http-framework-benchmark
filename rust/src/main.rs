use axum::{
    routing::get,
    Router
};

#[tokio::main]
async fn main()  {
    let app = Router::new()
        .route("/", get(root));

    println!("Listening on http://127.0.0.1:6000");

    let ln = tokio::net::TcpListener::bind("127.0.0.1:6000").await.unwrap();
    axum::serve(ln, app).await.unwrap()
}

async fn root() -> &'static str {
    "ABCD"
}
