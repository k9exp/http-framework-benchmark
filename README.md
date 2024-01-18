# Need

## Languages
- GoLang
- Rust
- NodeJS
- Pnpm

## Tools to benchmark

- Apache Bench

####  Blog: https://kunalsin9h.com/blog/get-bench

## Install Dependencies & Run App

### For NodeJS 

In `express` and `fastify` folders do

```bash
pnpm install
```

To run them

```bash
node index.js
```

> Express app will listen on `:3000`, fastify will listen on `:4000`

### For Go

No need to do anything (no 3rd pary lib/pkg)

To run

```bash
go run main.go
```

> Go will listen on port `:5000`

### For Rust

In `rust` folder do

```bash
cargo fetch
```

To run 

```bash
cargo build --release

./target/release/rust
```

> Rust will listen on port `:6000`
