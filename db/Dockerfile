FROM mysql:8.0

ENV MYSQL_DATABASE=webtranslate \
    MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} 
                            #^ This is supposed to be an ENV Variable

# Copy custom configuration file to ensure data persistence
COPY my.cnf /etc/mysql/my.cnf

# Expose MySQL port
EXPOSE 3306

# Define the volume for MySQL data storage
VOLUME /var/lib/mysql

# Start MySQL service
CMD ["mysqld"]
