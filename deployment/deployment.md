# Deployment instructions

## Deploy a new version of the app

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

## View logs

```
sudo journalctl -u digivisio.service
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
