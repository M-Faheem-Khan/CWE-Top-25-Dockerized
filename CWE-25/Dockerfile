FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

# Generating random flag
RUN echo "flag{$(echo $RANDOM | md5sum | head -c 20; echo;)}" > /etc/flag.txt

EXPOSE 8080

CMD ["node", "app.js"]

# EOF