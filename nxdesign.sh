#!/bin/sh
SERVICE_NAME=nxdesign
PID_PATH_NAME=/opt/nx-design/nxdesign-pid
NPM_PATH=/root/.nvm/versions/node/v16.13.0/bin/npm

SYS_PARAMS="-Xmx8g -Dlogging.file=/opt/nx-design/logs/nxdesign.log -Dlogging.level.root=info"
case $1 in
install)
       echo "Starting $SERVICE_NAME ..."
  if [ ! -f $PID_PATH_NAME ]; then
       cd /opt/nx-design || exit
       $NPM_PATH install
       echo "$SERVICE_NAME started ..."
  else
       echo "$SERVICE_NAME is already running ..."
  fi
;;
build)
       echo "Starting $SERVICE_NAME ..."
  if [ ! -f $PID_PATH_NAME ]; then
       cd /opt/nx-design || exit
       $NPM_PATH run build-linux
       echo "$SERVICE_NAME started ..."
  else
       echo "$SERVICE_NAME is already running ..."
  fi
;;
start)
       echo "Starting $SERVICE_NAME ..."
  if [ ! -f $PID_PATH_NAME ]; then
       cd /opt/nx-design || exit
       nohup $NPM_PATH run start 1>>/opt/nx-design/logs/nxdesign.log 2>>/opt/nx-design/logs/nxdesign.log & echo $! > $PID_PATH_NAME
       echo "$SERVICE_NAME started ..."
  else
       echo "$SERVICE_NAME is already running ..."
  fi
;;
stop)
  if [ -f $PID_PATH_NAME ]; then
         PID=$(cat $PID_PATH_NAME);
         cd /opt/nx-design || exit
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
      cd /opt/nx-design || exit
      echo "$SERVICE_NAME stopping ...";
      kill $PID;
      echo "$SERVICE_NAME stopped ...";
      rm $PID_PATH_NAME
      echo "$SERVICE_NAME starting ..."
      nohup $NPM_PATH run start 1>>/opt/nx-design/logs/nxdesign.log 2>>/opt/nx-design/logs/nxdesign.log & echo $! > $PID_PATH_NAME
      echo "$SERVICE_NAME started ..."
  else
      echo "$SERVICE_NAME is not running ..."
     fi     ;;
 esac
