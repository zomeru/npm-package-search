interface IRepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: IRepositoriesState, action: any) => {
  switch (action.type)
};

export default reducer;
