class Config:
    SECRET_KEY = 'super_secreto'

class DevelopmentConfig(Config):
    DEBUG=True
    UPLOAD_FOLDER = './static/img'
    MYSQL_HOST = 'localhost'
    MYSQL_USER = 'root'
    MYSQL_PASSWORD = ''
    MYSQL_DB = 'gbbs_db'

config={
    'development':DevelopmentConfig
}