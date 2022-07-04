#& 0 - EXPORT PGUSER
export PGUSER=postgres

#& 1 - Création d'un utilisateur
createuser -l -P ochamaille

#& 2 - Création d'une BDD ainsi que le propriétaire
createdb -O ochamaille ochamaille

#& 3 - Initialiser Sqitch
sqitch init ochamaille_sqitch --engine pg

#& 4 - Création d'une version 1 pour la BDD
# sqitch add ochamaille_v1_init -n "01 - Créations des tables"