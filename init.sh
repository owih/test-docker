#!/bin/bash

cp .env.example .env
composer install
yarn
php artisan key:generate