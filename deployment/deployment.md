# Deployment instructions

The build images are pushed to the private registry `digivisioacr.azurecr.io`


## Login to private docker registry (once)
Before pulling images we need to log in to the private registry. The password can be found: ... where do we put it?
The credentials will be persisted and usually will not have to be re-entered

```
sudo docker login digivisioacr.azurecr.io -u digivisioacr
```


## Deploy a new version of the app

```
sudo systemctl stop digivisio.service

sudo cd /home/cloud-user/app/ && sudo docker compose pull

sudo systemctl start digivisio.service
```

## View logs

```
sudo journalctl -u digivisio.service
```

## Updating the docker-compose file

On developer's laptop:
```
scp docker-compose.yml koe4-dv.csc.fi:~
```

On the server:
```
sudo chown root:root docker-compose.yml
sudo mv docker-compose.yml /home/cloud-user/app/

sudo systemctl restart digivisio.service
```

## Updating the systemd service file

On developer's laptop:
```
scp deployment/digivisio.service koe4-dv.csc.fi:~
```

On the server:
```
sudo chown root:root digivisio.service
sudo mv digivisio.service /etc/systemd/system/

# On the first run only?
# sudo systemctl enable digivisio.service

sudo systemctl restart digivisio.service
```
