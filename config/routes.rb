Rails.application.routes.draw do
  root to: "tests#index"
  post "tests", to: "tests#user_create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
