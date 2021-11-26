#!/bin/sh
SERVICE_NAME=neodesign
PID_PATH_NAME=/opt/nx-design/nxdesign-pid

SYS_PARAMS="-Xmx8g -Dlogging.file=/opt/nx-design/logs/nxdesign.log -Dlogging.level.root=info"
case $1 in
install)
       echo "Starting $SERVICE_NAME ..."
  if [ ! -f $PID_PATH_NAME ]; then
       npm install
       echo "$SERVICE_NAME started ..."
  else
       echo "$SERVICE_NAME is already running ..."
  fi
;;
build)
       echo "Starting $SERVICE_NAME ..."
  if [ ! -f $PID_PATH_NAME ]; then
       npm build-linux
       echo "$SERVICE_NAME started ..."
  else
       echo "$SERVICE_NAME is already running ..."
  fi
;;
start)
       echo "Starting $SERVICE_NAME ..."
  if [ ! -f $PID_PATH_NAME ]; then
       nohup npm run start 1>>/opt/neo-design/logs/nxdesign.log 2>>/opt/nx-design/logs/nxdesign.log & echo $! > $PID_PATH_NAME
       echo "$SERVICE_NAME started ..."
  else
       echo "$SERVICE_NAME is already running ..."
  fi
;;
stop)
  if [ -f $PID_PATH_NAME ]; then
         PID=$(cat $PID_PATH_NAME);
         echo "$SERVICE_NAME stoping ..."
         kill $PID;
         echo "$SERVICE_NAME stopped ..."
         rm $PID_PATH_NAME
  else
         echo "$SERVICE_NAME is not running ..."
  fi
;;
restart)
  if [ -f $PID_PATH_NAME ]; then
      PID=$(cat $PID_PATH_NAME);
      echo "$SERVICE_NAME stopping ...";
      kill $PID;
      echo "$SERVICE_NAME stopped ...";
      rm $PID_PATH_NAME
      echo "$SERVICE_NAME starting ..."
       nohup /usr/jdk64/jdk1.8.0_112/bin/java $SYS_PARAMS -jar $PATH_TO_JAR 2>> /dev/null >>/dev/null & echo $! > $PID_PATH_NAME
      echo "$SERVICE_NAME started ..."
  else
      echo "$SERVICE_NAME is not running ..."
     fi     ;;
 esac
