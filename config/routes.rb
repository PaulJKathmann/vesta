Rails.application.routes.draw do
  # Check out which route is for which page on figma
  # event/:id might be changed to event token later
  root to: 'pages#home'
  get 'projects/new', to: 'events#new'
  post 'projects', to: 'events#create'
  get 'projects/:id/edit', to: 'events#edit'
  patch 'projects/:id', to: 'events#update'
  get 'projects/:id', to: 'events#show'
  get 'projects', to: 'events#index'
end
