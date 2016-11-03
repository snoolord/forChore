Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :new, :destroy]
    resources :groups
    resources :groupings
  end

  root "static_pages#root"
end
