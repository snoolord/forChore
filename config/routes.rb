Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :new, :destroy]
    resources :groups
    resources :groupings
    resource :user do
      get :dashboard
    end
  end
  root "static_pages#root"
end
