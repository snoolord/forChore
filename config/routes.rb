Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :new, :destroy]
    resource :groups
    resource :groupings
  end

  root "static_pages#root"
end
