Rails.application.routes.draw do
  resources :quotes
  resources :users do
  	resources :meditation_sessions
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
