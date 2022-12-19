# FROM golang:1.20rc1-alpine
# WORKDIR /app
# COPY *.go ./
# RUN go build -o hello hello.go && \
#     rm hello.go

# CMD [ "./hello" ]

# Até aqui funciona v1 - 250mb
# ===============================



# FROM golang AS golang
# WORKDIR /app
# COPY *.go ./

# RUN go build -o hello hello.go && \
#     rm hello.go

# FROM alpine:3.17
# WORKDIR /root
# COPY --from=golang /app ./
# CMD [ "./hello" ]

# Até aqui funciona v2 - 8.87mb
# ===============================



FROM golang:1.20rc1 AS golang
WORKDIR /app
COPY *.go ./
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 && \
    go build -o hello hello.go

FROM scratch
COPY --from=golang /app .
CMD ["./hello"]

# v3 1,8MB AEEEOW
# ==========================