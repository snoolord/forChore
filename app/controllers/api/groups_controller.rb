class Api::GroupsController < ApplicationController
  def create
    @group = Group.new(group_params)
    if params["group"]["housemate_ids"]
      @group.housemate_ids = params["group"]["housemate_ids"].map(&:to_i)
    end
    if @group.save
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = Group.find(params[:id])
    if params["group"]["housemate_ids"]
      @group.housemate_ids = params["group"]["housemate_ids"].map(&:to_i)
    end
    if @group.update_attributes(group_params)
      @group
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end

  end
  def destroy
    @group = Group.find(params[:id])
    @group.destroy
    render json: ["deleted"]
  end
  def show
    @group = Group.find(params[:id])
    @chores = Hash.new { |hash, key| hash[key] = [] }
    @group.housemates.each do | housemate |
      @chores[housemate.id] = housemate.chores
    end
  end

  private
  def group_params
    params.require(:group).permit(:title, :creator_id, :housemate_ids, :user_id)
  end

end
