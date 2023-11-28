FROM golang:1.20.5-alpine3.18 as build
WORKDIR /go/src/github.com/Haraj-backend/hex-monscape

COPY go.mod go.sum ./
RUN go mod download -x

COPY ./cmd/server ./cmd/server
COPY ./internal ./internal

RUN go build -o /go/bin/server ./cmd/server

FROM alpine:3.18
COPY --from=build /go/bin/server /go/bin/server
ENTRYPOINT ["/go/bin/server"]
