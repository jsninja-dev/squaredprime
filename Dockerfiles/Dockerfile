FROM alpine:3.21
ENV TIMEZONE="Europe/Nicosia"

# Create non-root user and app folder
RUN adduser -D -u 1000 -g 'www' www && mkdir -p /app

# Install necessary packages
RUN apk add --no-cache \
    tzdata \
    nodejs \
    yarn \
    npm

# Set correct timezone
RUN rm -rf /etc/localtime && \
    ln -s /usr/share/zoneinfo/$TIMEZONE /etc/localtime && \
    echo "${TIMEZONE}" > /etc/timezone

# Set working directory
WORKDIR /app

# Copy project files first to leverage caching
COPY . .

RUN yarn add quill chart.js

# Install dependencies and build with Yarn only
RUN yarn install && \
    yarn run build && \
    yarn cache clean && \
    chown -R www:www /app

# (Optional) Debug .output/server
RUN ls -la .output/server
ENV PORT=3030
EXPOSE 3030

# Run app
CMD ["node", ".output/server/index.mjs"]