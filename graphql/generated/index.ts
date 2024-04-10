/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/ban-types */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AppUser = {
  __typename?: 'AppUser';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  requestLoginOTP: Scalars['String']['output'];
  userLogin: Scalars['String']['output'];
};

export type MutationRequestLoginOtpArgs = {
  email: Scalars['String']['input'];
};

export type MutationUserLoginArgs = {
  input?: InputMaybe<UserLoginInput>;
};

export type Query = {
  __typename?: 'Query';
  getRecipe?: Maybe<Recipe>;
  getRecipeByName: Array<Recipe>;
  // eslint-disable-next-line @typescript-eslint/array-type
  getRecipes: Array<Maybe<Recipe>>;
  getRecipesByIngredient: Array<Recipe>;
  // eslint-disable-next-line @typescript-eslint/array-type
  getRecipesByLetter: Array<Recipe>;
  getUser?: Maybe<AppUser>;
  getUsers: Array<Maybe<AppUser>>;
};

export type QueryGetRecipeArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetRecipeByNameArgs = {
  input: Search;
};

export type QueryGetRecipesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetRecipesByIngredientArgs = {
  input: Seachingredient;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetRecipesByLetterArgs = {
  input: SearchLetter;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type Recipe = {
  __typename?: 'Recipe';
  areas?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  ingredients: Array<RecipeIngredient>;
  instructions?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  youtube?: Maybe<Scalars['String']['output']>;
};

export type RecipeIngredient = {
  __typename?: 'RecipeIngredient';
  id: Scalars['ID']['output'];
  measure?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type Seachingredient = {
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Search = {
  title: Scalars['String']['input'];
};

export type SearchLetter = {
  Letter?: InputMaybe<Scalars['String']['input']>;
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AppUser: ResolverTypeWrapper<AppUser>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Recipe: ResolverTypeWrapper<Recipe>;
  RecipeIngredient: ResolverTypeWrapper<RecipeIngredient>;
  Seachingredient: Seachingredient;
  Search: Search;
  SearchLetter: SearchLetter;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UserLoginInput: UserLoginInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AppUser: AppUser;
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: object;
  Query: {};
  Recipe: Recipe;
  RecipeIngredient: RecipeIngredient;
  Seachingredient: Seachingredient;
  Search: Search;
  SearchLetter: SearchLetter;
  String: Scalars['String']['output'];
  UserLoginInput: UserLoginInput;
};

export type AppUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AppUser'] = ResolversParentTypes['AppUser'],
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  requestLoginOTP?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationRequestLoginOtpArgs, 'email'>
  >;
  userLogin?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    Partial<MutationUserLoginArgs>
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  getRecipe?: Resolver<
    Maybe<ResolversTypes['Recipe']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetRecipeArgs, 'id'>
  >;
  getRecipeByName?: Resolver<
    Array<ResolversTypes['Recipe']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetRecipeByNameArgs, 'input'>
  >;
  getRecipes?: Resolver<
    Array<Maybe<ResolversTypes['Recipe']>>,
    ParentType,
    ContextType,
    Partial<QueryGetRecipesArgs>
  >;
  getRecipesByIngredient?: Resolver<
    Array<ResolversTypes['Recipe']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetRecipesByIngredientArgs, 'input'>
  >;
  getRecipesByLetter?: Resolver<
    Array<ResolversTypes['Recipe']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetRecipesByLetterArgs, 'input'>
  >;
  getUser?: Resolver<
    Maybe<ResolversTypes['AppUser']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserArgs, 'id'>
  >;
  getUsers?: Resolver<Array<Maybe<ResolversTypes['AppUser']>>, ParentType, ContextType>;
};

export type RecipeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe'],
> = {
  areas?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ingredients?: Resolver<Array<ResolversTypes['RecipeIngredient']>, ParentType, ContextType>;
  instructions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  youtube?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecipeIngredientResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['RecipeIngredient'] = ResolversParentTypes['RecipeIngredient'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  measure?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AppUser?: AppUserResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Recipe?: RecipeResolvers<ContextType>;
  RecipeIngredient?: RecipeIngredientResolvers<ContextType>;
};

export type GetRecipeQueryVariables = Exact<{
  getRecipeId: Scalars['ID']['input'];
}>;

export type GetRecipeQuery = {
  __typename?: 'Query';
  getRecipe?: {
    __typename?: 'Recipe';
    id: string;
    title: string;
    image?: string | null;
    category?: string | null;
    areas?: string | null;
    instructions?: string | null;
    youtube?: string | null;
    ingredients: Array<{
      __typename?: 'RecipeIngredient';
      id: string;
      name: string;
      measure?: string | null;
    }>;
  } | null;
};

export type GetRecipeByNameQueryVariables = Exact<{
  input: Search;
}>;

export type GetRecipeByNameQuery = {
  __typename?: 'Query';
  getRecipeByName: Array<{
    __typename?: 'Recipe';
    id: string;
    title: string;
    image?: string | null;
    category?: string | null;
    areas?: string | null;
    instructions?: string | null;
    youtube?: string | null;
    ingredients: Array<{
      __typename?: 'RecipeIngredient';
      id: string;
      name: string;
      measure?: string | null;
    }>;
  }>;
};

export type GetRecipesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetRecipesQuery = {
  __typename?: 'Query';
  getRecipes: Array<{
    __typename?: 'Recipe';
    id: string;
    title: string;
    image?: string | null;
    category?: string | null;
    areas?: string | null;
    instructions?: string | null;
    youtube?: string | null;
    ingredients: Array<{
      __typename?: 'RecipeIngredient';
      id: string;
      name: string;
      measure?: string | null;
    }>;
  } | null>;
};

export type GetRecipesByIngredientQueryVariables = Exact<{
  input: Seachingredient;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetRecipesByIngredientQuery = {
  __typename?: 'Query';
  getRecipesByIngredient: Array<{
    __typename?: 'Recipe';
    id: string;
    title: string;
    image?: string | null;
    category?: string | null;
    areas?: string | null;
    instructions?: string | null;
    youtube?: string | null;
    ingredients: Array<{
      __typename?: 'RecipeIngredient';
      id: string;
      name: string;
      measure?: string | null;
    }>;
  }>;
};

export type GetRecipesByLetterQueryVariables = Exact<{
  input: SearchLetter;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetRecipesByLetterQuery = {
  __typename?: 'Query';
  getRecipesByLetter: Array<{
    letter: any;
    __typename?: 'Recipe';
    id: string;
    title: string;
    image?: string | null;
    category?: string | null;
    areas?: string | null;
    instructions?: string | null;
    youtube?: string | null;
    ingredients: Array<{
      __typename?: 'RecipeIngredient';
      id: string;
      name: string;
      measure?: string | null;
    }>;
  }>;
};

export type GetUserQueryVariables = Exact<{
  getUserId: Scalars['ID']['input'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  getUser?: {
    __typename?: 'AppUser';
    id: string;
    email: string;
    password?: string | null;
    image?: string | null;
    username?: string | null;
  } | null;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: 'Query';
  getUsers: Array<{
    __typename?: 'AppUser';
    id: string;
    email: string;
    password?: string | null;
    image?: string | null;
    username?: string | null;
  } | null>;
};

export type RequestLoginOtpMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;

export type RequestLoginOtpMutation = { __typename?: 'Mutation'; requestLoginOTP: string };

export type UserLoginMutationVariables = Exact<{
  input?: InputMaybe<UserLoginInput>;
}>;

export type UserLoginMutation = { __typename?: 'Mutation'; userLogin: string };

export const GetRecipeDocument = gql`
  query GetRecipe($getRecipeId: ID!) {
    getRecipe(id: $getRecipeId) {
      id
      title
      image
      category
      areas
      instructions
      youtube
      ingredients {
        id
        name
        measure
      }
    }
  }
`;

/**
 * __useGetRecipeQuery__
 *
 * To run a query within a React component, call `useGetRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeQuery({
 *   variables: {
 *      getRecipeId: // value for 'getRecipeId'
 *   },
 * });
 */
export function useGetRecipeQuery(
  baseOptions: Apollo.QueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables> &
    ({ variables: GetRecipeQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRecipeQuery, GetRecipeQueryVariables>(GetRecipeDocument, options);
}
export function useGetRecipeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRecipeQuery, GetRecipeQueryVariables>(GetRecipeDocument, options);
}
export function useGetRecipeSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetRecipeQuery, GetRecipeQueryVariables>(
    GetRecipeDocument,
    options,
  );
}
export type GetRecipeQueryHookResult = ReturnType<typeof useGetRecipeQuery>;
export type GetRecipeLazyQueryHookResult = ReturnType<typeof useGetRecipeLazyQuery>;
export type GetRecipeSuspenseQueryHookResult = ReturnType<typeof useGetRecipeSuspenseQuery>;
export type GetRecipeQueryResult = Apollo.QueryResult<GetRecipeQuery, GetRecipeQueryVariables>;
export const GetRecipeByNameDocument = gql`
  query GetRecipeByName($input: Search!) {
    getRecipeByName(input: $input) {
      id
      title
      image
      category
      areas
      instructions
      youtube
      ingredients {
        id
        name
        measure
      }
    }
  }
`;

/**
 * __useGetRecipeByNameQuery__
 *
 * To run a query within a React component, call `useGetRecipeByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeByNameQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetRecipeByNameQuery(
  baseOptions: Apollo.QueryHookOptions<GetRecipeByNameQuery, GetRecipeByNameQueryVariables> &
    ({ variables: GetRecipeByNameQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRecipeByNameQuery, GetRecipeByNameQueryVariables>(
    GetRecipeByNameDocument,
    options,
  );
}
export function useGetRecipeByNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeByNameQuery, GetRecipeByNameQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRecipeByNameQuery, GetRecipeByNameQueryVariables>(
    GetRecipeByNameDocument,
    options,
  );
}
export function useGetRecipeByNameSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetRecipeByNameQuery,
    GetRecipeByNameQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetRecipeByNameQuery, GetRecipeByNameQueryVariables>(
    GetRecipeByNameDocument,
    options,
  );
}
export type GetRecipeByNameQueryHookResult = ReturnType<typeof useGetRecipeByNameQuery>;
export type GetRecipeByNameLazyQueryHookResult = ReturnType<typeof useGetRecipeByNameLazyQuery>;
export type GetRecipeByNameSuspenseQueryHookResult = ReturnType<
  typeof useGetRecipeByNameSuspenseQuery
>;
export type GetRecipeByNameQueryResult = Apollo.QueryResult<
  GetRecipeByNameQuery,
  GetRecipeByNameQueryVariables
>;
export const GetRecipesDocument = gql`
  query GetRecipes($page: Int, $pageSize: Int) {
    getRecipes(page: $page, pageSize: $pageSize) {
      id
      title
      image
      category
      areas
      instructions
      youtube
      ingredients {
        id
        name
        measure
      }
    }
  }
`;

/**
 * __useGetRecipesQuery__
 *
 * To run a query within a React component, call `useGetRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useGetRecipesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetRecipesQuery, GetRecipesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRecipesQuery, GetRecipesQueryVariables>(GetRecipesDocument, options);
}
export function useGetRecipesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRecipesQuery, GetRecipesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRecipesQuery, GetRecipesQueryVariables>(
    GetRecipesDocument,
    options,
  );
}
export function useGetRecipesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetRecipesQuery, GetRecipesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetRecipesQuery, GetRecipesQueryVariables>(
    GetRecipesDocument,
    options,
  );
}
export type GetRecipesQueryHookResult = ReturnType<typeof useGetRecipesQuery>;
export type GetRecipesLazyQueryHookResult = ReturnType<typeof useGetRecipesLazyQuery>;
export type GetRecipesSuspenseQueryHookResult = ReturnType<typeof useGetRecipesSuspenseQuery>;
export type GetRecipesQueryResult = Apollo.QueryResult<GetRecipesQuery, GetRecipesQueryVariables>;
export const GetRecipesByIngredientDocument = gql`
  query GetRecipesByIngredient($input: Seachingredient!, $page: Int, $pageSize: Int) {
    getRecipesByIngredient(input: $input, page: $page, pageSize: $pageSize) {
      id
      title
      image
      category
      areas
      instructions
      youtube
      ingredients {
        id
        name
        measure
      }
    }
  }
`;

/**
 * __useGetRecipesByIngredientQuery__
 *
 * To run a query within a React component, call `useGetRecipesByIngredientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipesByIngredientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipesByIngredientQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useGetRecipesByIngredientQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRecipesByIngredientQuery,
    GetRecipesByIngredientQueryVariables
  > &
    ({ variables: GetRecipesByIngredientQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRecipesByIngredientQuery, GetRecipesByIngredientQueryVariables>(
    GetRecipesByIngredientDocument,
    options,
  );
}
export function useGetRecipesByIngredientLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRecipesByIngredientQuery,
    GetRecipesByIngredientQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRecipesByIngredientQuery, GetRecipesByIngredientQueryVariables>(
    GetRecipesByIngredientDocument,
    options,
  );
}
export function useGetRecipesByIngredientSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetRecipesByIngredientQuery,
    GetRecipesByIngredientQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetRecipesByIngredientQuery, GetRecipesByIngredientQueryVariables>(
    GetRecipesByIngredientDocument,
    options,
  );
}
export type GetRecipesByIngredientQueryHookResult = ReturnType<
  typeof useGetRecipesByIngredientQuery
>;
export type GetRecipesByIngredientLazyQueryHookResult = ReturnType<
  typeof useGetRecipesByIngredientLazyQuery
>;
export type GetRecipesByIngredientSuspenseQueryHookResult = ReturnType<
  typeof useGetRecipesByIngredientSuspenseQuery
>;
export type GetRecipesByIngredientQueryResult = Apollo.QueryResult<
  GetRecipesByIngredientQuery,
  GetRecipesByIngredientQueryVariables
>;
export const GetRecipesByLetterDocument = gql`
  query GetRecipesByLetter($input: SearchLetter!, $page: Int, $pageSize: Int) {
    getRecipesByLetter(input: $input, page: $page, pageSize: $pageSize) {
      id
      title
      image
      category
      areas
      instructions
      youtube
      ingredients {
        id
        name
        measure
      }
    }
  }
`;

/**
 * __useGetRecipesByLetterQuery__
 *
 * To run a query within a React component, call `useGetRecipesByLetterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipesByLetterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipesByLetterQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useGetRecipesByLetterQuery(
  baseOptions: Apollo.QueryHookOptions<GetRecipesByLetterQuery, GetRecipesByLetterQueryVariables> &
    ({ variables: GetRecipesByLetterQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRecipesByLetterQuery, GetRecipesByLetterQueryVariables>(
    GetRecipesByLetterDocument,
    options,
  );
}
export function useGetRecipesByLetterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRecipesByLetterQuery,
    GetRecipesByLetterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRecipesByLetterQuery, GetRecipesByLetterQueryVariables>(
    GetRecipesByLetterDocument,
    options,
  );
}
export function useGetRecipesByLetterSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetRecipesByLetterQuery,
    GetRecipesByLetterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetRecipesByLetterQuery, GetRecipesByLetterQueryVariables>(
    GetRecipesByLetterDocument,
    options,
  );
}
export type GetRecipesByLetterQueryHookResult = ReturnType<typeof useGetRecipesByLetterQuery>;
export type GetRecipesByLetterLazyQueryHookResult = ReturnType<
  typeof useGetRecipesByLetterLazyQuery
>;
export type GetRecipesByLetterSuspenseQueryHookResult = ReturnType<
  typeof useGetRecipesByLetterSuspenseQuery
>;
export type GetRecipesByLetterQueryResult = Apollo.QueryResult<
  GetRecipesByLetterQuery,
  GetRecipesByLetterQueryVariables
>;
export const GetUserDocument = gql`
  query GetUser($getUserId: ID!) {
    getUser(id: $getUserId) {
      id
      email
      password
      image
      username
    }
  }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      getUserId: // value for 'getUserId'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> &
    ({ variables: GetUserQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export function useGetUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = gql`
  query GetUsers {
    getUsers {
      id
      email
      password
      image
      username
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export function useGetUsersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const RequestLoginOtpDocument = gql`
  mutation RequestLoginOTP($email: String!) {
    requestLoginOTP(email: $email)
  }
`;
export type RequestLoginOtpMutationFn = Apollo.MutationFunction<
  RequestLoginOtpMutation,
  RequestLoginOtpMutationVariables
>;

/**
 * __useRequestLoginOtpMutation__
 *
 * To run a mutation, you first call `useRequestLoginOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestLoginOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestLoginOtpMutation, { data, loading, error }] = useRequestLoginOtpMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestLoginOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RequestLoginOtpMutation,
    RequestLoginOtpMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RequestLoginOtpMutation, RequestLoginOtpMutationVariables>(
    RequestLoginOtpDocument,
    options,
  );
}
export type RequestLoginOtpMutationHookResult = ReturnType<typeof useRequestLoginOtpMutation>;
export type RequestLoginOtpMutationResult = Apollo.MutationResult<RequestLoginOtpMutation>;
export type RequestLoginOtpMutationOptions = Apollo.BaseMutationOptions<
  RequestLoginOtpMutation,
  RequestLoginOtpMutationVariables
>;
export const UserLoginDocument = gql`
  mutation userLogin($input: UserLoginInput) {
    userLogin(input: $input)
  }
`;
export type UserLoginMutationFn = Apollo.MutationFunction<
  UserLoginMutation,
  UserLoginMutationVariables
>;

/**
 * __useUserLoginMutation__
 *
 * To run a mutation, you first call `useUserLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUserLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<UserLoginMutation, UserLoginMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserLoginMutation, UserLoginMutationVariables>(
    UserLoginDocument,
    options,
  );
}
export type UserLoginMutationHookResult = ReturnType<typeof useUserLoginMutation>;
export type UserLoginMutationResult = Apollo.MutationResult<UserLoginMutation>;
export type UserLoginMutationOptions = Apollo.BaseMutationOptions<
  UserLoginMutation,
  UserLoginMutationVariables
>;
